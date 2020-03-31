// import React from "react";
// import Header from "./Header";

// import { mount } from "enzyme";

// const mockData = {
//     text: "Button",
//     link: "google.com"
// };

// describe("Header Test", () => {
//     let component;

//     beforeEach(() => {
//         component = mount(
//             <Header text={mockData.text} link={mockData.link} />
//         );
//     });

//     it("Should render a button containing a div", () => {
//         expect(component.find("div").length).toEqual(1);
//     });

//     it("Should receive text data passed as props from parent", () => {
//         expect(component.props().text).toEqual(mockData.text);
//     });

//     it("Should receive a href passed as props from parent", () => {
//         expect(component.props().link).toEqual(mockData.link);
//     });
// });
