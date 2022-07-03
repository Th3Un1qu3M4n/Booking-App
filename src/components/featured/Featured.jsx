import './featured.css'

const Featured = () => {
  return (
    <div  className='featured'>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/724981.webp?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=" alt="isb-img"className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Islamabad</h1>
                <h2>1234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/688249.webp?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=" alt="isb-img"className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Lahore</h1>
                <h2>1234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/640442.webp?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=" alt="isb-img"className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Karachi</h1>
                <h2>1234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/country/square250/364.webp?k=e1060912bc701eda5db297a286037d2b2e3898e34362d7d22d8b754a260ea2fc&o=" alt="isb-img"className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Muree</h1>
                <h2>1234 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured