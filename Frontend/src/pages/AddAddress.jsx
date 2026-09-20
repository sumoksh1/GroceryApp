import { useState } from "react";
import { assets } from "../assets/assets";

const InputField = ({ type, placeholder, name, handleChange, address }) => {
    return (
        <input
            className="w-full px-3 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
            value={address[name]}
            required
        />
    );
};

const AddAddress = () => {
    const [address, setAdresses] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdresses((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="mt-16 pb-16">
            <p className="text-2xl md:text-3xl text-gray-500">
                Add Shipping{" "}
                <span className="font-semibold text-primary">Address</span>
            </p>
            <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
                <div className="flex-1 max-w-md"></div>
                <form
                    onSubmit={onSubmitHandler}
                    className="space-y-3 mt-6 text-sm"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            handleChange={handleChange}
                            address={address}
                        />
                        <InputField
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            handleChange={handleChange}
                            address={address}
                        />
                    </div>
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        handleChange={handleChange}
                        address={address}
                    />
                    <InputField
                        type="text"
                        placeholder="Street"
                        name="street"
                        handleChange={handleChange}
                        address={address}
                    />
                    <div>
                        <InputField
                            type="text"
                            placeholder="City"
                            name="city"
                            handleChange={handleChange}
                            address={address}
                        />
                        <InputField
                            type="text"
                            placeholder="State"
                            name="state"
                            handleChange={handleChange}
                            address={address}
                        />
                    </div>
                    <div>
                        <InputField
                            type="number"
                            placeholder="Zipcode"
                            name="zipcode"
                            handleChange={handleChange}
                            address={address}
                        />
                        <InputField
                            type="text"
                            placeholder="Country"
                            name="country"
                            handleChange={handleChange}
                            address={address}
                        />
                    </div>
                    <InputField
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        handleChange={handleChange}
                        address={address}
                    />
                    <button
                        type="submit"
                        className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase"
                    >
                        Save Address
                    </button>
                </form>
                <img
                    className="md:mr-16 mb-16 md:mt-0"
                    src={assets.add_address_iamge}
                    alt="Add Address"
                />
            </div>
        </div>
    );
};

export default AddAddress;
