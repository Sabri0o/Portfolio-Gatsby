// this file to handle this error :

// warning  In page templates only a default export of a valid React component and the named exports of a page query, getServerData or config are allowed.
//         All other named exports will cause Fast Refresh to not preserve local component state and do a full refresh.

//         Please move your other named exports to another file. Also make sure that you only export page queries that use the "graphql" tag from "gatsby".
//   limited-exports-page-templates
import { createContext } from "react";

export const postContext = createContext();
