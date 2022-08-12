import React from 'react';

function App() {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="mt-8 w-80">
        <div className="box-border border-gray-600 h-16 w-80 p-4 border-2 flex justify-end">
          <span id="result" className="text-2xl" value="0">0</span>
        </div>
        <div className="flex justify-end mt-2">
          <div className="box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-red-200 cursor-pointer"
            id="clear"
            value="C">
            C
          </div>
        </div>
        <div className="flex justify-end flex-wrap gap-2 mt-2">
          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="7">
            7
          </div>
          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="8">
            8
          </div>
          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="9">
            9
          </div>
          <div
            className=" key-operation box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-gray-200 cursor-pointer"
            value="/">
            /
          </div>

          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="4">
            4
          </div>
          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="5">
            5
          </div>
          <div
            className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="6">
            6
          </div>
          <div
            className="key-operation box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-gray-200 cursor-pointer"
            value="x">
            x
          </div>

          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="1">
            1
          </div>
          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="2">
            2
          </div>
          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="3">
            3
          </div>
          <div className="key-operation box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-gray-200 cursor-pointer"
            value="-">
            -
          </div>

          <div className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value="0">
            0
          </div>
          <div className="key-dot box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
            value=".">
            .
          </div>
          <div id="equal"
            className="box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-green-200 cursor-pointer"
          >
            =
          </div>
          <div className="key-operation key-operation box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-gray-200 cursor-pointer"
            value="+">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
