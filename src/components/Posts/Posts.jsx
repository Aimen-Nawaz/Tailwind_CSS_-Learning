import React, { useEffect, useState } from "react";
import axios from "axios";

import PostsHeader from "./PostsHeader";
import PostSearch from "./PostSearch";
import PostGrid from "./PostGrid";
import Pagination from "../Pagination";
import Loader from "../pageLoader/pageLoader";
import NotFound from "../pageLoader/notFound";
import { usePage } from "../../context/PageContext";
import { useFilter } from "../../context/FilterContext";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { query, sortBy, orderBy } = useFilter();

    const { page, skip, limit, setTotal } = usePage();


    const getPosts = async () => {
        try {
            setLoading(true);

            let url = "https://dummyjson.com/posts";

            if (query) {
                url += `/search?q=${query}`;
            }

            const params = new URLSearchParams();

            if (sortBy) {
                params.append("sortBy", sortBy);
                params.append("order", orderBy);
            }

            params.append("limit", limit);
            params.append("skip", skip);

            url += `${url.includes("?") ? "&" : "?"}${params.toString()}`;

            const response = await axios.get(url);

            setPosts(response.data.posts);
            setTotal(response.data.total);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, [query, sortBy, orderBy, page, skip, limit]);

    if (loading && !query && !sortBy) return <Loader />;
    if (!posts) return <NotFound />;
    return (
        <div className="p-6 bg-mist-950 min-h-screen min-w-screen">


            <PostsHeader />

            <PostSearch />

            <PostGrid posts={posts} />

            <Pagination />
        </div>
    );
};

export default Posts;