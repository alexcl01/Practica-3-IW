import React, {FC, useState} from "react";
import {gql, useQuery} from "@apollo/client";

type Characters = {
    characters: {
        results: Array<{name:string, id:string}>
        info: {
            pages: number
        }
    }
}

const GET_CHARACTERS = gql`
    query characters($page: Int) {
        characters(page: $page) {
            info {
                pages
            }
            results {
                name
                id
            }
        }
    }
`

const Container: FC = () => {

    const [page, setPage] = useState<number>(1);

    const {loading, error, data, refetch} = 
    useQuery<Characters>(GET_CHARACTERS, 
        {
            variables: {
                page,
            },
        });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>
        {data?.characters.results.map((c) => (<div key = {c.id}>{c.name}</div>))}

        <div>-----------------------</div>

        {page > 1 && (
            <div onClick={() => setPage(page - 1)}>Página Anterior</div>)}

        {page < data!.characters.info.pages && (
            <div onClick={() => setPage(page + 1)}>Página Siguiente</div>)}


    </div>
}

export default Container;