import React from 'react';
import Head from 'next/head';

const PAGE_DETAILS = {
    desc: 'React Application which renders countries related informations',
    keywords: ['Nextjs', 'Restcountriesapi', 'Reactjs', 'Lekandar', 'olamilekan'],
};
interface IProps {
    description?: string;
    keywords?: string[];
    title: string;
}

const PageHead: React.FC<IProps> = ({ title, description, keywords }: IProps) => {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords?.join(',')} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{`Countries Finder - ${title}`}</title>
        </Head>
    );
};

PageHead.defaultProps = {
    description: PAGE_DETAILS.desc,
    keywords: PAGE_DETAILS.keywords,
};

export default PageHead;
