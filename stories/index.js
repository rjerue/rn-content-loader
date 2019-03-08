import React from "react";
import { storiesOf } from "@storybook/react";
import ReactMarkdown from "react-markdown";
import readme from "../README.md";
import Instagram from "./instagram";

storiesOf("Examples", module).add("Instagram Style", () => <Instagram />);
