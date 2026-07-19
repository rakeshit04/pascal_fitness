"use client";

import { useState } from "react";
import AnimatedHeading from "../ui/AnimatedHeading";

type Gender = "male" | "female";
type Goal = "maintenance" | "fatloss" | "musclegain";
type Activity =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "athlete";

const activityMap = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  athlete: 1.9,
};

export default function Calculator() {
  // CALORIE STATES
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState<Gender>("male");
  const [activity, setActivity] =
    useState<Activity>("moderate");

  const [calorieResult, setCalorieResult] =
    useState<null | {
      bmr: number;
      tdee: number;
      cut: number;
      bulk: number;
    }>(null);

  // PROTEIN STATES
  const [pAge, setPAge] = useState("");
  const [pWeight, setPWeight] = useState("");
  const [pHeight, setPHeight] = useState("");
  const [pGender, setPGender] =
    useState<Gender>("male");
  const [pGoal, setPGoal] =
    useState<Goal>("fatloss");
  const [pActivity, setPActivity] =
    useState<Activity>("moderate");

  const [proteinResult, setProteinResult] =
    useState<null | {
      protein: number;
      mealProtein: number;
      bmr: number;
      tdee: number;
    }>(null);

  function calculateCalories() {
    const a = Number(age);
    const w = Number(weight);
    const h = Number(height);

    if (!a || !w || !h) return;

    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = Math.round(
      bmr * activityMap[activity]
    );

    setCalorieResult({
      bmr: Math.round(bmr),
      tdee,
      cut: Math.round(tdee * 0.8),
      bulk: Math.round(tdee * 1.12),
    });
  }

  function resetCalories() {
    setAge("");
    setWeight("");
    setHeight("");
    setGender("male");
    setActivity("moderate");
    setCalorieResult(null);
  }

  function calculateProtein() {
    const a = Number(pAge);
    const w = Number(pWeight);
    const h = Number(pHeight);

    if (!a || !w || !h) return;

    const bmr =
      pGender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = Math.round(
      bmr * activityMap[pActivity]
    );

    let multiplier = 1.8;

    if (pGoal === "fatloss") multiplier = 2;
    if (pGoal === "musclegain") multiplier = 2.2;

    const protein = Math.round(w * multiplier);

    setProteinResult({
      protein,
      mealProtein: Math.round(protein / 4),
      bmr: Math.round(bmr),
      tdee,
    });
  }

  function resetProtein() {
    setPAge("");
    setPWeight("");
    setPHeight("");
    setPGender("male");
    setPGoal("fatloss");
    setPActivity("moderate");
    setProteinResult(null);
  }

  const inputStyle =
    "rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-4 text-[#1C181B] outline-none transition-all duration-300 focus:border-[#B11A32] focus:ring-4 focus:ring-[#B11A32]/10";

  return (
    <section
      id="calculator"
      className="bg-[#FAFAFA] px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8ca660]">
            Fitness Tools
          </p>

          <h2 className="text-4xl font-black uppercase text-[#1C181B] sm:text-5xl lg:text-6xl">
            <AnimatedHeading
              text="Fitness Calculators"
              delayBase={0.2}
            />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#666666]">
            Calculate your daily calorie and protein
            requirements based on your body goals.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* CALORIE */}
          <div className="rounded-[32px] border border-[#E5E5E5] bg-white p-8 shadow-xl">
            <h3 className="mb-8 text-2xl font-bold text-[#1C181B]">
              Calorie Calculator
            </h3>

            <div className="grid gap-4">
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
                className={inputStyle}
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) =>
                  setHeight(e.target.value)
                }
                className={inputStyle}
              />

              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
                className={inputStyle}
              />

              <select
                value={gender}
                onChange={(e) =>
                  setGender(
                    e.target.value as Gender
                  )
                }
                className={inputStyle}
              >
                <option value="male">
                  Male
                </option>
                <option value="female">
                  Female
                </option>
              </select>

              <select
                value={activity}
                onChange={(e) =>
                  setActivity(
                    e.target.value as Activity
                  )
                }
                className={inputStyle}
              >
                <option value="sedentary">
                  Sedentary
                </option>
                <option value="light">
                  Light Activity
                </option>
                <option value="moderate">
                  Moderate Activity
                </option>
                <option value="active">
                  Active
                </option>
                <option value="athlete">
                  Athlete
                </option>
              </select>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={calculateCalories}
                className="flex-1 rounded-full bg-[#8ca660] py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#86a559]"
              >
                Calculate
              </button>

              <button
                onClick={resetCalories}
                className="flex-1 rounded-full border border-[#E5E5E5] bg-[#F5F5F5] py-4 font-semibold text-[#666666]"
              >
                Reset
              </button>
            </div>

            {calorieResult && (
              <div className="mt-8 space-y-4">
                <Result
                  label="BMR"
                  value={`${calorieResult.bmr} kcal`}
                />

                <Result
                  label="Maintenance"
                  value={`${calorieResult.tdee} kcal`}
                />

                <Result
                  label="Fat Loss"
                  value={`${calorieResult.cut} kcal`}
                />

                <Result
                  label="Muscle Gain"
                  value={`${calorieResult.bulk} kcal`}
                />
              </div>
            )}
          </div>

          {/* PROTEIN */}
          <div className="rounded-[32px] border border-[#E5E5E5] bg-white p-8 shadow-xl">
            <h3 className="mb-8 text-2xl font-bold text-[#1C181B]">
              Protein Calculator
            </h3>

            <div className="grid gap-4">
              <input
                type="number"
                placeholder="Age"
                value={pAge}
                onChange={(e) =>
                  setPAge(e.target.value)
                }
                className={inputStyle}
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={pHeight}
                onChange={(e) =>
                  setPHeight(e.target.value)
                }
                className={inputStyle}
              />

              <input
                type="number"
                placeholder="Weight (kg)"
                value={pWeight}
                onChange={(e) =>
                  setPWeight(e.target.value)
                }
                className={inputStyle}
              />

              <select
                value={pGender}
                onChange={(e) =>
                  setPGender(
                    e.target.value as Gender
                  )
                }
                className={inputStyle}
              >
                <option value="male">
                  Male
                </option>
                <option value="female">
                  Female
                </option>
              </select>

              <select
                value={pGoal}
                onChange={(e) =>
                  setPGoal(
                    e.target.value as Goal
                  )
                }
                className={inputStyle}
              >
                <option value="maintenance">
                  Maintenance
                </option>
                <option value="fatloss">
                  Fat Loss
                </option>
                <option value="musclegain">
                  Muscle Gain
                </option>
              </select>

              <select
                value={pActivity}
                onChange={(e) =>
                  setPActivity(
                    e.target.value as Activity
                  )
                }
                className={inputStyle}
              >
                <option value="sedentary">
                  Sedentary
                </option>
                <option value="light">
                  Light Activity
                </option>
                <option value="moderate">
                  Moderate Activity
                </option>
                <option value="active">
                  Active
                </option>
                <option value="athlete">
                  Athlete
                </option>
              </select>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={calculateProtein}
                className="flex-1 rounded-full bg-[#8ca660] py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#86a559]"
              >
                Calculate
              </button>

              <button
                onClick={resetProtein}
                className="flex-1 rounded-full border border-[#E5E5E5] bg-[#F5F5F5] py-4 font-semibold text-[#666666]"
              >
                Reset
              </button>
            </div>

            {proteinResult && (
              <div className="mt-8 space-y-4">
                <Result
                  label="Daily Protein"
                  value={`${proteinResult.protein} g`}
                />

                <Result
                  label="Per Meal"
                  value={`${proteinResult.mealProtein} g`}
                />

                <Result
                  label="BMR"
                  value={`${proteinResult.bmr} kcal`}
                />

                <Result
                  label="TDEE"
                  value={`${proteinResult.tdee} kcal`}
                />

                <div className="rounded-2xl border border-[#B11A32]/20 bg-[#B11A32]/5 p-4">
                  <p className="text-sm text-[#666666]">
                    Aim to consume{" "}
                    <span className="font-bold text-[#B11A32]">
                      {
                        proteinResult.protein
                      }
                      g protein/day
                    </span>{" "}
                    for optimal recovery and
                    muscle growth.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-4">
      <span className="font-medium text-[#666666]">
        {label}
      </span>

      <span className="font-bold text-[#B11A32]">
        {value}
      </span>
    </div>
  );
}