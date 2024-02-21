"use client";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DateRangeInput, DateRangePicker, Stack } from "rsuite";
import { ValueType } from "rsuite/esm/Checkbox";
const { allowedMaxDays } = DateRangePicker;
function Header() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [dateRange, setDateRange] = useState<any>([null, null]);

  const handleDateRangeChange = (value: any) => {
    console.log("Selected Date Range: ", value);
    setDateRange(value);
  };

  return (
    <div
      className={`fixed z-10 ${
        count ? "w-[80%] ml-[20%] " : "w-[94%] ml-[6%] "
      }duration-300 flex justify-between  h-14 bg-gray-100 `}
    >
      {/* <h1 className="text-xl font">Dashboard</h1>
      {/* <h1>Hello Rutika!</h1> */}
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none gap-1">
          <Stack
            spacing={10}
            className="mr-44"
            direction="column"
            alignItems="flex-start"
          >
            <DateRangePicker
              format="dd.MM.yyyy"
              shouldDisableDate={allowedMaxDays(365)}
              onChange={handleDateRangeChange}
              value={dateRange}
            />
          </Stack>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-cyan-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
