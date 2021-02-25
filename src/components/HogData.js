

function HogData({pig}){
return(
    <div>
        <p>Specialty: {pig.specialty}</p>
        <p>Weight: {pig.weight}</p>
        <p>Greased: {pig.greased ? "It's a greased hog!" : "No grease!"}</p>
        {/* <p>Highest Medal: {pig."highest medal achieved"}</p> */}
    </div>
)
}

export default HogData;

