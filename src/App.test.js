import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const app = mount(<App />);

test("test 1", () => {
  app.find("#first").simulate("change", {
    target: { value: "2" }
  });
  app.find("#second").simulate("change", {
    target: { value: "1" }
  });
  app.find("#third").simulate("change", {
    target: { value: 1000 }
  });
  app.find("#fourth").simulate("change", {
    target: { value: "2%" }
  });
  app.find("button").simulate("click");
  let result = app.find("#result");
  expect(result.text()).toEqual("That is a 21000 Ω, 2% precision resistor");
});

test("test 2", () => {
  app.find("#first").simulate("change", {
    target: { value: "4" }
  });
  app.find("#second").simulate("change", {
    target: { value: "6" }
  });
  app.find("#third").simulate("change", {
    target: { value: 100000 }
  });
  app.find("#fourth").simulate("change", {
    target: { value: "2%" }
  });
  app.find("button").simulate("click");
  let result = app.find("#result");
  expect(result.text()).toEqual("That is a 4600000 Ω, 2% precision resistor");
});

test("test 3", () => {
  app.find("#first").simulate("change", {
    target: { value: "5" }
  });
  app.find("#second").simulate("change", {
    target: { value: "2" }
  });
  app.find("#third").simulate("change", {
    target: { value: 0.01 }
  });
  app.find("#fourth").simulate("change", {
    target: { value: "0.01%" }
  });
  app.find("button").simulate("click");
  let result = app.find("#result");
  expect(result.text()).toEqual("That is a 0.52 Ω, 0.01% precision resistor");
});
