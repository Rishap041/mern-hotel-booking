import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from "../api-client";

const AddHotel = () => {
    const { showToast } = useAppContext();
    const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
        onSuccess: () => {
            showToast({ message: "hotel Saved!", type: "SUCCESS" });
        },
        onError: () => {
            showToast({ message: "Error in saving hotel", type: "ERROR" });
        },
    });

    const handleSave = (hotelFormData: FormData) => {
        mutate(hotelFormData)
    }
    return (
        <ManageHotelForm onSave={handleSave} isLoading={isLoading} />
    )
}

export default AddHotel
