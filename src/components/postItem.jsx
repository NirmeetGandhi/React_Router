import { useParams } from "react-router-dom"

const PostItem = ()=>{
    const params = useParams();

    console.log(params);
    return (
        <>
        POSTITEM No : {params.id}
        </>
    )
}

export default PostItem