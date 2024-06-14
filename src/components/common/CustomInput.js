"use client";
import { Input } from "antd";

export default function CustomInput(props) {
  const {
    placaholder,
    prefix,
    className,
    onChange,
    onBlur,
    value,
    error,
    name,
  } = props;
  return (
    <>
      <Input
        className={className}
        size="large"
        placeholder={placaholder}
        prefix={prefix}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        status={error && "error"}
        name={name}
      />
      {error && <p className="ms-2 mb-0 text-danger">{error}</p>}
    </>
  );
}
