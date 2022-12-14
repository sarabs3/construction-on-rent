import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addMachine,
  selectMachines,
  deleteMachine,
  updateMachineField,
  selectTitleField,
} from "./MachineTypesSlice";
import { Navigate, useParams } from "react-router-dom";
import Machine from "./components/Machine";
import PageHeading from "../../components/PageHeading";
import { FieldTypes } from "../../types/machine";
import NoMachines from "../../components/NoMachines";

const Machines = () => {
  const params = useParams();
  const machines = useAppSelector(selectMachines(params?.id));
  const titleField = useAppSelector(selectTitleField(params.id));
  const dispatch = useAppDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string,
    fieldId: string
  ) => {
    if (!params?.id) return;
    let value: string | boolean = e.target.value;
    if (e.target.type === FieldTypes.checkbox) {
      value = e.target.checked
    }
    dispatch(
      updateMachineField({
        id: params.id,
        machineId: id,
        fieldId,
        key: "fieldValue",
        value: value,
      })
    );
  };
  const AddNew = () => {
    if (!params?.id) return;
    dispatch(addMachine({ id: params.id }));
  };
  const machineDelete = (id: string) => {
    if (!params?.id) return;
    dispatch(deleteMachine({ id: params.id, machineId: id }));
  };
  if (!params?.id) return <Navigate to="/types" />;
  return (
    <div className="container bg-gray-100 rounded mb-5 py-3 px-5">
      <PageHeading>
        <div className="uppercase text-xs">
          <span className="ml-2">Total Machines:</span>
          <span className="font-bold uppercase text-sm">
            {" "}
            {machines?.length}
          </span>
        </div>
        <button onClick={AddNew} className="btn-primary">
          Add New Machine
        </button>
      </PageHeading>
      {machines?.length === 0 && (
        <NoMachines><p className="text-sm">Add new machine</p></NoMachines>
      )}
      <div className="flex flex-wrap ">
        {machines?.map((machine) => (
          <Machine
            machine={machine}
            key={machine.id}
            titleField={titleField}
            machineDelete={machineDelete}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Machines;
