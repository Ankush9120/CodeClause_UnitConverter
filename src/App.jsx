import React, { useEffect, useState } from "react";
import "./App.css";
import ExchangeIcon from "./assets/Exchange";

const App = () => {
  const [conversionFrom, setConversionFrom] = useState("Select");
  const [conversionTo, setConversionTo] = useState("Select");

  const [conversionValue, setConversionValue] = useState(null);

  const [toggleFrom, setToggleFrom] = useState(false);
  const [toggleTo, setToggleTo] = useState(false);

  const [result, setResult] = useState(0);

  const [option, setOption] = useState(0);

  const conversions = {
    Length: ["Meter", "Kilometer", "Centimeter", "Millimeter", "Mile"],
    Temperature: ["Celsius", "Kelvin", "Fahrenheit"],
    Area: [
      "Square Meter",
      "Square Kilometer",
      "Hectare",
      "Square Mile",
      "Acre",
    ],
    Volume: [
      "Liter",
      "Millimeter",
      "Cubic Meter",
      "Cubic Kilometer",
      "Cubic Centimeter",
    ],
    Weight: ["Kilogram", "Gram", "Milligram", "Pound", "Ounce"],
    Time: ["Second", "Minute", "Hour", "Day", "Week"],
  };

  const convert = (value) => {
    let myOption = Object.keys(conversions)[option];
    if (myOption === "Length") {
      switch (conversionFrom) {
        case "Meter":
          switch (conversionTo) {
            case "Kilometer":
              setResult(value / 1000);
              break;
            case "Centimeter":
              setResult(value * 100);
              break;
            case "Millimeter":
              setResult(value * 1000);
              break;
            case "Mile":
              setResult(value / 1609.344);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Kilometer":
          switch (conversionTo) {
            case "Meter":
              setResult(value * 1000);
              break;
            case "Centimeter":
              setResult(value * 100000);
              break;
            case "Millimeter":
              setResult(value * 1000000);
              break;
            case "Mile":
              setResult(value / 1.609);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Centimeter":
          switch (conversionTo) {
            case "Meter":
              setResult(value / 100);
              break;
            case "Kilometer":
              setResult(value / 100000);
              break;
            case "Millimeter":
              setResult(value * 10);
              break;
            case "Mile":
              setResult(value / 160934.4);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Millimeter":
          switch (conversionTo) {
            case "Meter":
              setResult(value / 1000);
              break;
            case "Kilometer":
              setResult(value / 1000000);
              break;
            case "Centimeter":
              setResult(value / 10);
              break;
            case "Mile":
              setResult(value / 1.609e6);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Mile":
          switch (conversionTo) {
            case "Meter":
              setResult(value * 1609.344);
              break;
            case "Kilometer":
              setResult(value * 1.609);
              break;
            case "Centimeter":
              setResult(value * 160934.4);
              break;
            case "Millimeter":
              setResult(value * 1.609e6);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        default:
          setResult("undefined");
          break;
      }
    } else if (myOption === "Temperature") {
      switch (conversionFrom) {
        case "Celsius":
          switch (conversionTo) {
            case "Kelvin":
              setResult(value + 273.15);
              break;
            case "Fahrenheit":
              setResult(value * 1.8 + 32);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Kelvin":
          switch (conversionTo) {
            case "Celsius":
              setResult(value - 273.15);
              break;
            case "Fahrenheit":
              setResult(value * 1.8 - 459.67);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Fahrenheit":
          switch (conversionTo) {
            case "Celsius":
              setResult((value - 32) / 1.8);
              break;
            case "Kelvin":
              setResult((value + 459.67) / 1.8);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        default:
          setResult(value);
          break;
      }
    } else if (myOption === "Area") {
      switch (conversionFrom) {
        case "Square Meter":
          switch (conversionTo) {
            case "Square Kilometer":
              setResult(value / 1e6);
              break;
            case "Hectare":
              setResult(value / 10000);
              break;
            case "Square Mile":
              setResult(value / 2.59e6);
              break;
            case "Acre":
              setResult(value / 4046.856);
              break;
            default:
              setResult("undefined");
          }
          break;
        case "Square Kilometer":
          switch (conversionTo) {
            case "Square Meter":
              setResult(value * 1e6);
              break;
            case "Hectare":
              setResult(value * 100);
              break;
            case "Square Mile":
              setResult(value / 2.59);
              break;
            case "Acre":
              setResult(value * 247.105);
              break;
            default:
              setResult("undefined");
          }
          break;
        case "Hectare":
          switch (conversionTo) {
            case "Square Meter":
              setResult(value * 10000);
              break;
            case "Square Kilometer":
              setResult(value / 100);
              break;
            case "Square Mile":
              setResult(value / 259);
              break;
            case "Acre":
              setResult(value * 2.471);
              break;
            default:
              setResult("undefined");
          }
          break;
        case "Square Mile":
          switch (conversionTo) {
            case "Square Meter":
              setResult(value * 2.59e6);
              break;
            case "Square Kilometer":
              setResult(value * 2.59);
              break;
            case "Hectare":
              setResult(value * 259);
              break;
            case "Acre":
              setResult(value * 640);
              break;
            default:
              setResult("undefined");
          }
          break;
        case "Acre":
          switch (conversionTo) {
            case "Square Meter":
              setResult(value * 4046.856);
              break;
            case "Square Kilometer":
              setResult(value / 247.105);
              break;
            case "Hectare":
              setResult(value / 2.471);
              break;
            case "Square Mile":
              setResult(value / 640);
              break;
            default:
              setResult("undefined");
          }
          break;
        default:
          setResult(value);
      }
    } else if (myOption === "Volume") {
      switch (conversionFrom) {
        case "Liter":
          switch (conversionTo) {
            case "Milliliter":
              setResult(value * 1000);
              break;
            case "Cubic Meter":
              setResult(value / 1000);
              break;
            case "Cubic Kilometer":
              setResult(value / 1e12);
              break;
            case "Cubic Centimeter":
              setResult(value * 1000);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Milliliter":
          switch (conversionTo) {
            case "Liter":
              setResult(value / 1000);
              break;
            case "Cubic Meter":
              setResult(value / 1e6);
              break;
            case "Cubic Kilometer":
              setResult(value / 1e15);
              break;
            case "Cubic Centimeter":
              setResult(value);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Cubic Meter":
          switch (conversionTo) {
            case "Liter":
              setResult(value * 1000);
              break;
            case "Milliliter":
              setResult(value * 1e6);
              break;
            case "Cubic Kilometer":
              setResult(value / 1e9);
              break;
            case "Cubic Centimeter":
              setResult(value * 1e6);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Cubic Kilometer":
          switch (conversionTo) {
            case "Liter":
              setResult(value * 1e12);
              break;
            case "Milliliter":
              setResult(value * 1e15);
              break;
            case "Cubic Meter":
              setResult(value * 1e9);
              break;
            case "Cubic Centimeter":
              setResult(value * 1e18);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Cubic Centimeter":
          switch (conversionTo) {
            case "Liter":
              setResult(value / 1000);
              break;
            case "Milliliter":
              setResult(value);
              break;
            case "Cubic Meter":
              setResult(value / 1e6);
              break;
            case "Cubic Kilometer":
              setResult(value / 1e18);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        default:
          setResult(value);
          break;
      }
    } else if (myOption === "Weight") {
      switch (conversionFrom) {
        case "Kilogram":
          switch (conversionTo) {
            case "Gram":
              setResult(value * 1000);
              break;
            case "Milligram":
              setResult(value * 1e6);
              break;
            case "Pound":
              setResult(value * 2.20462);
              break;
            case "Ounce":
              setResult(value * 35.274);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Gram":
          switch (conversionTo) {
            case "Kilogram":
              setResult(value / 1000);
              break;
            case "Milligram":
              setResult(value * 1000);
              break;
            case "Pound":
              setResult(value * 0.00220462);
              break;
            case "Ounce":
              setResult(value * 0.035274);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Milligram":
          switch (conversionTo) {
            case "Kilogram":
              setResult(value / 1e6);
              break;
            case "Gram":
              setResult(value / 1000);
              break;
            case "Pound":
              setResult(value * 2.20462e-6);
              break;
            case "Ounce":
              setResult(value * 3.5274e-5);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Pound":
          switch (conversionTo) {
            case "Kilogram":
              setResult(value / 2.20462);
              break;
            case "Gram":
              setResult(value * 453.592);
              break;
            case "Milligram":
              setResult(value * 453592);
              break;
            case "Ounce":
              setResult(value * 16);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Ounce":
          switch (conversionTo) {
            case "Kilogram":
              setResult(value / 35.274);
              break;
            case "Gram":
              setResult(value * 28.3495);
              break;
            case "Milligram":
              setResult(value * 28349.5);
              break;
            case "Pound":
              setResult(value / 16);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        default:
          setResult(value);
          break;
      }
    } else if (myOption === "Time") {
      switch (conversionFrom) {
        case "Second":
          switch (conversionTo) {
            case "Minute":
              setResult(value / 60);
              break;
            case "Hour":
              setResult(value / 3600);
              break;
            case "Day":
              setResult(value / 86400);
              break;
            case "Week":
              setResult(value / 604800);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Minute":
          switch (conversionTo) {
            case "Second":
              setResult(value * 60);
              break;
            case "Hour":
              setResult(value / 60);
              break;
            case "Day":
              setResult(value / 1440);
              break;
            case "Week":
              setResult(value / 10080);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Hour":
          switch (conversionTo) {
            case "Second":
              setResult(value * 3600);
              break;
            case "Minute":
              setResult(value * 60);
              break;
            case "Day":
              setResult(value / 24);
              break;
            case "Week":
              setResult(value / 168);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Day":
          switch (conversionTo) {
            case "Second":
              setResult(value * 86400);
              break;
            case "Minute":
              setResult(value * 1440);
              break;
            case "Hour":
              setResult(value * 24);
              break;
            case "Week":
              setResult(value / 7);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        case "Week":
          switch (conversionTo) {
            case "Second":
              setResult(value * 604800);
              break;
            case "Minute":
              setResult(value * 10080);
              break;
            case "Hour":
              setResult(value * 168);
              break;
            case "Day":
              setResult(value * 7);
              break;
            default:
              setResult("undefined");
              break;
          }
          break;
        default:
          setResult(value);
          break;
      }
    }
  };

  const [toggleExchange, setToggleExchange] = useState(false);

  const exchange = () => {
    let temp = conversionFrom;
    setConversionFrom(conversionTo);
    setConversionTo(temp);
    setToggleExchange(!toggleExchange);
  };

  useEffect(() => {
    convert(conversionValue);
    if (conversionValue === 0) {
      setResult(0);
    } else if (conversionFrom === "Select" || conversionTo === "Select") {
      setConversionValue("");
      setResult(0);
    }
  }, [conversionFrom, option, conversionTo]);

  return (
    <main>
      <header className="mainTitle">React Unit Converter</header>

      <ul className="options">
        {Object.keys(conversions).map((e, i) => {
          return (
            <li
              onClick={() => {
                setOption(i);
                setConversionFrom("Select");
                setConversionTo("Select");
              }}
              key={i}
              className={option === i ? "active" : undefined}
            >
              {e}
            </li>
          );
        })}
      </ul>

      <div className="converterBox">
        <div className="converterBoxInside grid items-center gap-5">
          {/* From  */}

          <div className="grid gap-3 col">
            <div className="customSelect">
              <div
                onClick={() => {
                  setToggleFrom(!toggleFrom);
                  setToggleTo(false);
                }}
                className="selectedBox"
              >
                {conversionFrom}
              </div>

              {toggleFrom && (
                <ul>
                  {Object.values(conversions)[option].map((e, i) => {
                    return (
                      <li
                        onClick={() => {
                          setConversionFrom(e);
                          setToggleFrom(false);
                        }}
                        key={i}
                      >
                        {e}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <input
              placeholder="0"
              onChange={(e) => {
                convert(e.target.value);
                setConversionValue(e.target.value);
              }}
              className="from placeholder:text-black placeholder:focus-within:text-transparent"
              type="tel"
              value={conversionValue || ""}
              maxLength={10}
            />
          </div>

          <span className="text-4xl px-2">~</span>

          {/* To  */}

          <div className="grid gap-3 col">
            <div className="customSelect">
              <div
                onClick={() => {
                  setToggleTo(!toggleTo);
                  setToggleFrom(false);
                }}
                className="selectedBox"
              >
                {conversionTo}
              </div>

              {toggleTo && (
                <ul>
                  {Object.values(conversions)[option].map((e, i) => {
                    return (
                      <li
                        onClick={() => {
                          setConversionTo(e);
                          setToggleTo(false);
                        }}
                        key={i}
                      >
                        {e}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="to">{result}</div>
          </div>
        </div>
      </div>
      <button
        onClick={exchange}
        className={`exchangeBtn ${toggleExchange && "toggledExchange"}`}
      >
        <ExchangeIcon className={"h-8"} />
      </button>
    </main>
  );
};

export default App;
