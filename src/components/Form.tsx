import InputField from "./InputField";

function Form() {
  return (
    <div>
      <InputField
        id="bedrooms"
        placeholder="Number of Bedrooms"
        label="Bedroom"
      />
      <InputField
        id="bathrooms"
        placeholder="Number of Bathrooms"
        label="Bathroom"
      />
      <InputField
        id="acre-lot"
        placeholder="Land Size (Optional)"
        label="acres"
      />
      <InputField
        id="house-size"
        placeholder="Carpet Area (Optional)"
        label="sq ft."
      />
    </div>
  );
}

export default Form;
