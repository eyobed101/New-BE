

export const SendValidity = async (req, res) => {
    try {
        res.status(200).json({ isValid: true });
    }catch (error){
        res.status(401).json({ isValid:false });
    }
}


