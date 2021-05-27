import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { MovieScrollView } from "./screens/movies_scroll_view.js";
import React, { useState } from "react";

export default function App() {
  return <MovieScrollView />;
}
