import { useState } from "react";

function PropertyForm() {
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    residentialType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("YOUR_AZURE_MODEL_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    });
    const result = await response.json();
    alert("Predicted Sale Value: " + result.result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
      </select>
      <select name="residentialType" value={formData.residentialType} onChange={handleChange}>
        <option value="condo">Condo</option>
        <option value="town-house">Town-House</option>
        <option value="single-family">Single-Family</option>
        <option value="multi-family">Multi-Family</option>
      </select>
      <button type="submit">Get Sale Price</button>
    </form>
  );
}
