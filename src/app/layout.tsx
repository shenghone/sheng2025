"use client";
import type { Metadata } from "next";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloProvider } from "@apollo/client/react";
import "./globals.css";

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT }),
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

const metadata: Metadata = {
  title: "Sheng Hung Tsai",
  description: "Since 1990",
};

const TempWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
