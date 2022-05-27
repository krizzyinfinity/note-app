import { renderHook } from "@testing-library/react"; 
import { act } from "react-test-renderer";
import { useHooks } from "./hooks";
import TestRenderer from 'react-test-renderer';

describe("useHooks", ()=>{
    test("initial result to 6", () =>{
        const {numOfNotes} = renderHook(() =>useHooks());
        expect(numOfNotes).toBe(6);
    });
    test("result to 12", () =>{
        const {numOfNotes} = renderHook(() =>useHooks());
        expect(numOfNotes).toBe(6);
        act(()=> {
            numOfNotes.loadMore();
        });
        expect(numOfNotes).toBe(12);
    });


})