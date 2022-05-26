import { renderHook } from "@testing-library/react"; 
import { act } from "react-test-renderer";
import { useHooks } from "./hooks";
import TestRenderer from 'react-test-renderer';

describe("useHooks", ()=>{
    test("initial result to 3", () =>{
        const {numOfNotes} = renderHook(() =>useHooks());
        expect(numOfNotes).toBe(3);
    });
    test("result to 6", () =>{
        const {numOfNotes} = renderHook(() =>useHooks());
        expect(numOfNotes).toBe(3);
        act(()=> {
            numOfNotes.loadMore();
        });
        expect(numOfNotes).toBe(6);
    });


})