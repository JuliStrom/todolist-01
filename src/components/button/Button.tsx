type BtnPropsType = {
    title: string,
    onClickHandler?: () => void
}


export const Button = ({title, onClickHandler}: BtnPropsType) => {
    return (
        <button onClick={onClickHandler}>{title}</button>
    )
}