type BtnPropsType = {
    title: string,
}


export const Btn = ({title}: BtnPropsType) => {
    return (
        <button>{title}</button>
    )
}