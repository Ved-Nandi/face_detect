const Rank = ({userData})=>{

    return(
        <div className="tc ma0 pa0 mt6">
            <div className="white f3">
                {`${userData.name} your current rank is....`}
            </div>
            <div className="white f2 ">
                {`#${userData.entries}`}
            </div>
        </div>
    )
}

export default Rank