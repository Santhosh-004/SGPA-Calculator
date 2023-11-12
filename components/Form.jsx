"use client";
import { grades } from "@/libs/data";
import React, { useState } from "react";
import { Button, Input, SelectItem, Select } from "@nextui-org/react";
import Round from "./Round";

function Form() {
  let [creditList, setCreditList] = useState([0]);
  let [gradeList, setGradeList] = useState([]);
  let [sgpa, setSgpa] = useState(-1);
  let [list, setList] = useState([1]);

  const grade_handler = (e, index) => {
    setGradeList((prevGradeList) => {
      const newGradeList = [...prevGradeList];
      newGradeList[index] = e.target.value;
      return newGradeList;
    });
  };

  function credit_handler(target, id) {
    let temp = [...creditList];
    temp[id - 1] = target.value;
    setCreditList(temp);
  }

  function calculate() {
    let csum = 0,
      gsum = 0;
    gradeList.forEach((element, index) => {
      gsum += element * creditList[index];
      csum += parseInt(creditList[index]);
    });
    //console.log(gsum, csum, gsum / csum);
    setSgpa((gsum / csum) * 10);
  }

  function reset() {
    setCreditList([0]);
    setGradeList([]);
    setSgpa(-1);
    setList([1]);
  }

  function GraTon(params) {
    return (
      <div className="flex flex-row space-x-3 items-center">
        <div className="w-3/4">
          <Input
            key={params.id}
            type="number"
            placeholder="Credit"
            size="lg"
            value={creditList[params.id - 1]}
            onChange={(e) => {
              credit_handler(e.target, params.id);
            }}
          />
        </div>
        <div className="w-1/4">
          <Select
            key={params.id}
            color="primary"
            size="lg"
            defaultSelectedKeys={[`${params.default}`]}
            //defaultSelectedKeys={["10"]}
            onChange={(e) => grade_handler(e, params.id - 1)}
          >
            {grades.map((grade) => (
              <SelectItem key={grade.value} value={grade.value}>
                {grade.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <form className="space-y-5">
          {list.map((item) => {
            //console.log(item);
            return (
              <GraTon key={item} id={item} default={gradeList[item - 1]} />
            );
          })}
          <div className="flex flex-row space-x-3">
            <Button
              color="primary"
              variant="flat"
              className="w-2/5 h-14 text-xl"
              onClick={() => setList([...list, list.length + 1])}
            >
              Add Course
            </Button>
            <Button
              color="success"
              variant="flat"
              className="w-3/5 h-14 text-xl"
              onClick={() => (
                calculate()
              )}
            >
              Calculate
            </Button>
          </div>
        </form>
        
        {sgpa != -1 ? (
            <div className="text-center">
                <Round sgpa={sgpa}/>
                <Button variant="bordered" color="danger" className="mt-5 text-xl w-32" onClick={()=>{reset()}}>Reset</Button>
            </div>
        ):(<div></div>)}
        
      </div>
    </>
  );
  
}

export default Form;
