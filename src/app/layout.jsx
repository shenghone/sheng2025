"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloProvider } from "@apollo/client/react";
import "./globals.css";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://sheng2025-backend.vercel.app/graphql"}),
  cache: new InMemoryCache(),
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TempWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default function RootLayout({ children }) {
  return (
    <TempWrapper>
      <html
        lang="en"
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <body>{children}</body>
      </html>
    </TempWrapper>
  );
}
