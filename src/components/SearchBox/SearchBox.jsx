import s from "./SearchBox.module.css"

const SearchBox = ({ value, onFilter }) => {
    return (
    <div>
        <p className={s.text}>Find contacts by name</p>
        <input
            className={s.filter}
            type="text"
            value={value}
            onChange={(e) => onFilter(e.target.value)}
        />
    </div>
    )
}

export default SearchBox