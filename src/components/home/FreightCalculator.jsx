import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import { ArrowRight, Calculator, RotateCcw } from "lucide-react";
import { additionalCharges, calculatorSettings, countries, freightRates, shipmentTypes, } from "../../data/freightRates";

export default function FreightCalculator() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        shipmentType: "",
        origin: "",
        destination: "",
        weight: "",
        volume: "",
    });

    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const selectedShipment = useMemo(() => {
        return shipmentTypes.find((item) => item.value === formData.shipmentType);
    }, [formData.shipmentType]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
        setResult(null);
    };

    const calculateFreight = (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        if (!formData.shipmentType || !formData.origin || !formData.destination) {
            setError(t("calculator.error"));
            return;
        }

        const weight = Number(formData.weight);
        const volume = Number(formData.volume);

        if (selectedShipment?.unit === "kg") {
            if (!formData.weight || weight < calculatorSettings.minimumWeight) {
                setError(
                    `Please enter a weight of at least ${calculatorSettings.minimumWeight} kg.`,
                );
                return;
            }
        }

        if (selectedShipment?.unit === "cbm") {
            if (!formData.volume || volume < calculatorSettings.minimumVolume) {
                setError(
                    `Please enter a volume of at least ${calculatorSettings.minimumVolume} CBM.`,
                );
                return;
            }
        }

        const shipmentRates = freightRates[formData.shipmentType];
        const originRates = shipmentRates?.[formData.origin];
        const routeRate = originRates?.[formData.destination];

        if (!routeRate) {
            setError(
                "A rate for this route is currently unavailable. Please contact Paghman for a quotation.",
            );
            return;
        }

        const rate = Number(routeRate.rate);
        let basePrice = 0;
        let calculationUnit = "";

        if (selectedShipment.unit === "kg") {
            basePrice = weight * rate;
            calculationUnit = `${weight} kg × AED${rate}`;
        } else {
            basePrice = volume * rate;
            calculationUnit = `${volume} CBM × AED${rate}`;
        }

        const extraCharges =
            Number(additionalCharges.documentation || 0) +
            Number(additionalCharges.handling || 0);

        const totalPrice = basePrice + extraCharges;

        setResult({
            price: Number(totalPrice.toFixed(calculatorSettings.decimalPlaces)),
            basePrice: Number(basePrice.toFixed(calculatorSettings.decimalPlaces)),
            extraCharges,
            rate,
            currency: routeRate.currency,
            calculationUnit,
            shipmentType: selectedShipment.label,
            origin: getCountryLabel(formData.origin),
            destination: getCountryLabel(formData.destination),
        });
    };

    const getCountryLabel = (value) => {
        const country = countries.find((item) => item.value === value);
        return country?.label || value;
    };

    const resetCalculator = () => {
        setFormData({
            shipmentType: "",
            origin: "",
            destination: "",
            weight: "",
            volume: "",
        });

        setResult(null);
        setError("");
    };

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-130">
                <div className="rounded-2xl bg-[#dcecf5] p-5 shadow-sm sm:p-7 dark:bg-navy-900">
                    <div className="mb-7 text-center">
                        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B1F3A] ">
                            <Calculator size={22} />
                        </div>
                        <SectionHeading title={t("home.calculatorTitle")} />
                    </div>

                    <form onSubmit={calculateFreight} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="shipmentType" className=" mb-1.5 block text-sm font-medium text-[#111827] ">
                                    {t("calculator.shipmentType")}
                                </label>

                                <select id="shipmentType" name="shipmentType" value={formData.shipmentType} onChange={handleChange}
                                    className=" h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 " >
                                    <option value="">Sea / Land</option>
                                    {shipmentTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="origin" className=" mb-1.5 block text-sm font-medium text-[#111827] " >
                                    {t("calculator.OriginC")}
                                </label>

                                <select id="origin" name="origin" value={formData.origin} onChange={handleChange}
                                    className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 " >
                                    <option value="">Origin Country</option>
                                    {countries.map((country) => (
                                        <option key={country.value} value={country.value}>
                                            {country.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="destination" className=" mb-1.5 block text-sm font-medium text-[#111827] " >
                                {t("calculator.destinationC")}
                            </label>

                            <select id="destination" name="destination" value={formData.destination} onChange={handleChange}
                                className=" h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20" >
                                <option value="">Destination Country</option>
                                {countries.map((country) => (
                                    <option key={country.value} value={country.value}>
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="weight" className=" mb-1.5 block text-sm font-medium text-[#111827]" >
                                    {t("calculator.weight")}
                                </label>

                                <input id="weight" name="weight" type="number" min="0" step="0.01" value={formData.weight}
                                    onChange={handleChange}
                                    placeholder="Enter weight"
                                    className=" w-full rounded-md border border-slate-200 h-11 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20" />
                            </div>

                            <div>
                                <label htmlFor="volume" className=" mb-1.5 block text-sm font-medium text-[#111827] " >
                                    {t("calculator.volume")}
                                </label>

                                <input id="volume" name="volume" type="number" min="0" step="0.01" value={formData.volume}
                                    onChange={handleChange}
                                    placeholder="Enter volume"
                                    className=" h-11 w-full rounded-md border border-slate-200 bg-white  px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 " />
                            </div>
                        </div>

                        {error && (
                            <div
                                className=" rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 " >
                                {error}
                            </div>
                        )}

                        <button type="submit" className=" flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gold-500  px-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#ea580c] active:scale-[0.99] " >
                            {t("calculator.btn")}
                            <ArrowRight size={17} className="rtl:scale-x-[-1]" />
                        </button>
                    </form>

                    {result && (
                        <div className=" mt-5 overflow-hidden rounded-xl bg-white shadow-sm " >
                            <div className=" border-b border-slate-100 px-5 py-4 text-center ">
                                <p className=" text-xs font-medium uppercase tracking-wider text-slate-500 " >
                                    Estimated Shipping Cost
                                </p>
                                <p className=" mt-1 text-3xl font-bold text-[#0B1F3A] " >
                                    {result.currency} {result.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="space-y-2 px-5 py-4">
                                <div className="flex justify-between gap-4 text-sm">
                                    <span className="text-slate-500">Shipment</span>

                                    <span className="font-medium text-slate-800">
                                        {result.shipmentType}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4 text-sm">
                                    <span className="text-slate-500">Route</span>

                                    <span className="text-right font-medium text-slate-800">
                                        {result.origin}
                                        {" → "}
                                        {result.destination}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4 text-sm">
                                    <span className="text-slate-500">Calculation</span>

                                    <span className="font-medium text-slate-800">
                                        {result.calculationUnit}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4 text-sm">
                                    <span className="text-slate-500">Base Freight</span>

                                    <span className="font-medium text-slate-800">
                                        ${result.basePrice.toLocaleString()}
                                    </span>
                                </div>

                                {result.extraCharges > 0 && (
                                    <div className="flex justify-between gap-4 text-sm">
                                        <span className="text-slate-500">Additional Charges</span>

                                        <span className="font-medium text-slate-800">
                                            ${result.extraCharges.toLocaleString()}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button type="button" onClick={resetCalculator}
                                className=" flex w-full items-center justify-center gap-2 border-t border-slate-100 px-5 py-3 text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-[#0B1F3A] " >
                                <RotateCcw size={14} />
                                Calculate Again
                            </button>
                        </div>
                    )}
                </div>

                <p className=" mt-3 text-center text-[11px] leading-5 text-slate-400 ">
                    {t("calculator.calculateDesc")}
                </p>
            </div>
        </section>
    );
}
