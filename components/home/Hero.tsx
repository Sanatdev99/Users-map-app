"use client";

import { useState } from "react";
import useZipAutocomplete from "@/lib/useZipAutocomplete";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupZip: "",
    pickupCity: "",
    pickupState: "",

    deliveryZip: "",
    deliveryCity: "",
    deliveryState: "",

    transportType: "open",
    year: "",
    make: "",
    model: "",
    condition: "operable",
    date: "",
    name: "",
    phone: "",
    email: "",
  });

  const pickupResults = useZipAutocomplete(formData.pickupZip);
  const deliveryResults = useZipAutocomplete(formData.deliveryZip);

  const handleNext = () => step < 3 && setStep(step + 1);
  const handleBack = () => step > 1 && setStep(step - 1);

  const handleSubmit = () => {
    console.log("Quote request:", formData);
    alert(
      `Quote Request Submitted!\n\nFrom: ${formData.pickupZip} (${formData.pickupCity}, ${formData.pickupState})\nTo: ${formData.deliveryZip} (${formData.deliveryCity}, ${formData.deliveryState})`
    );
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-between">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/7777.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* ===== LEFT SIDE TEXT ===== */}

        <div className="text-white space-y-6">
          <div className="inline-block bg-blue-600 px-4 py-2 rounded-full font-semibold">
            Looking for a trusted car shipping?
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Auto Shipping <br /> Company
          </h1>

          <h2 className="inline-block bg-blue-600 px-12 py-2 rounded-xl text-xl font-semibold">
            United Logistics Inc
          </h2>

          <p className="text-xl font-semibold">
            Professional, reliable, and affordable <br />
            car shipping across 48 states.
          </p>
        </div>

        {/* ===== RIGHT SIDE FORM ===== */}

        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md ml-auto">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">
            Calculate Your Car Shipping Price
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Smart, simple, and transparent.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 text-xs sm:text-sm">
            <a className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4 text-green-500" />
              Call us: <span className="font-semibold">(630) 912-6157</span>
            </a>
            <a className="flex items-center gap-2 text-gray-700">
              <MessageCircle className="w-4 h-4 text-green-500" />
              WhatsApp: <span className="font-semibold">(630) 912-6157</span>
            </a>
          </div>

          {/* ===================== STEP 1 ===================== */}
          {step === 1 && (
            <div className="space-y-4">

              {/* PICKUP ZIP AUTOCOMPLETE */}
              <div className="relative">
                <label className="block text-sm text-gray-700 mb-1">
                  Transport car from:
                </label>

                <input
                  type="text"
                  placeholder="ZIP code"
                  value={formData.pickupZip}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupZip: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                />

                {pickupResults.length > 0 && (
                  <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-1 max-h-56 overflow-y-auto z-20">
                    {pickupResults.map((r) => (
                          <div
                            key={r.zip}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                pickupZip: r.zip,
                                pickupCity: r.city,
                                pickupState: r.state_id,
                              })
                            }
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                          >
                            <span>{r.zip}</span>
                            <span className="text-gray-500">
                              {r.city}, {r.state_id}
                            </span>
                          </div>
                        ))}
                  </div>
                )}

                {formData.pickupCity && (
                  <p className="text-green-600 text-sm mt-1">
                    {formData.pickupCity}, {formData.pickupState}
                  </p>
                )}
              </div>

              {/* DELIVERY ZIP AUTOCOMPLETE */}
              <div className="relative">
                <label className="block text-sm text-gray-700 mb-1">
                  Transport car to:
                </label>

                <input
                  type="text"
                  placeholder="ZIP code"
                  value={formData.deliveryZip}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryZip: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                />

                {deliveryResults.length > 0 && (
                  <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-1 max-h-56 overflow-y-auto z-20">
                    {deliveryResults.map((r) => (
                      <div
                        key={r.zip}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            deliveryZip: r.zip,
                            deliveryCity: r.city,
                            deliveryState: r.state_id,
                          })
                        }
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                      >
                        <span>{r.zip}</span>
                        <span className="text-gray-500">
                          {r.city}, {r.state_id}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {formData.deliveryCity && (
                  <p className="text-green-600 text-sm mt-1">
                    {formData.deliveryCity}, {formData.deliveryState}
                  </p>
                )}
              </div>

            </div>
          )}

          {/* ===================== STEP BUTTONS ===================== */}
          <div className="flex gap-2 mt-6">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 bg-gray-200 py-3 rounded-lg font-semibold"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                Next <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                Get Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
