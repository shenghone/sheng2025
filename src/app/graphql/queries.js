import {gql} from "@apollo/client";


export const GET_PROJECTS = gql`
    {
        Projects {
        id
        Title
        FrontEnd
        BackEnd
        Description
        Status
        Asset
        Link
        }
    }

`