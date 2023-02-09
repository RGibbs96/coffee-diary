function Checkbox() {
    const handleChange = () => {
        console.log('The checkbox was toggled')
    }
    return (
            <input type="checkbox" onChange={handleChange} />

    )
}

export default Checkbox
