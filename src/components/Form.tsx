import InputField from "./InputField";
import LocationSearchBar from "./LocationSearchBar";
import Output from "./Output";

function Form() {
  return (
    <div>
      <InputField
        id="bedrooms"
        placeholder="Number of bedrooms"
        label="Bedroom"
      />
      <InputField
        id="bathrooms"
        placeholder="Number of bathrooms"
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
      <LocationSearchBar />
      <Output />
    </div>
  );
}

export default Form;
