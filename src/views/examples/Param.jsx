import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()
    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Value: {id}</p>
        </div>
    )
}

export default Param