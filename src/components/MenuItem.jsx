import CareScale from './CareScale'


function MenuItem({id, name, cover, manger, prix}){
    return (
        <li key={id} className=''>
        <img className='imgGrid' src={cover} alt={`${name} cover`} />
        {name}
        <div>
            <CareScale careType='manger' scaleValue={manger} />
            <CareScale careType='prix' scaleValue={prix} />
        </div>
    </li>
    )
}


export default MenuItem