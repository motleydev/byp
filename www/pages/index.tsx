import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { client } from "../utils/client";
import {
  GetFriends,
  GetFriendsQuery,
  GetFriendsQueryVariables,
} from "../generated/graphql";
import Link from "next/link";

interface Props {
  friends: GetFriendsQuery["friend"];
}

const Home: NextPage<Props> = ({ friends }) => {
  return (
    <div>
      <Head>
        <title>BYP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="prose mb-12">
          <h1>
            Welcome to BYP!
            <br />
            The number one place for backyard pizza with YOUR friends.
          </h1>
          <p>
            If you're new here, you probably need to{" "}
            <Link href="/login">
              <a>Signup or Login</a>
            </Link>
            , or you need to scan a party code to get going!
          </p>
        </article>
        <article className="prose mb-4">
          <h2>Pizza Lovin' Patrons include…</h2>
        </article>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {friends.map((friend) => (
            <div
              className="p-2 rounded-sm bg-green-200 aspect-square items-center flex"
              key={friend.id}
            >
              <p className="text-center">{friend.username}</p>
            </div>
          ))}
          <div className="p-2 rounded-sm bg-orange-200 aspect-square items-center flex">
            <p>You?</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return client
    .query<GetFriendsQuery, GetFriendsQueryVariables>(GetFriends)
    .toPromise()
    .then((d) => {
      return {
        props: { friends: d.data?.friend },
      };
    })
    .catch((e) => {
      return {
        props: {},
      };
    });
};
