import {useEffect, useState} from "react";
import { TodoView } from 'Frontend/views/TodoView.js';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([

  { path: '/', element: <TodoView/> },

]);

export default router;
