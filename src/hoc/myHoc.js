import React from 'react'
import PostService from '../service/Post'
export const withService = (Wrraped) =>(props)=>{
    const {getPosts,getCommit} = PostService
    console.log('--------------------');
    // console.log(Wrraped, props);
    console.log(PostService);
    console.log('--------------------');
    return (
        <Wrraped a={'aaaaaaa'} {...props} getPosts={getPosts} getCommit={getCommit} />
    )
}