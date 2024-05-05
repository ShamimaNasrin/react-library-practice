import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const data = [
    { text: 'Adaptability', value: 10, score: 70 },
    { text: 'Video Skills', value: 30, score: 80 },
    { text: 'Intelligence', value: 8, score: 100 },
    { text: 'Data Analysis', value: 10, score: 50 },
    { text: 'Problem Solving', value: 5, score: 97 },
    { text: 'Framing Skills', value: 2, score: 100 },
    { text: 'Social Selling', value: 20, score: 96 },
    { text: 'Collaboration', value: 30, score: 70 },
    { text: 'Negotiating', value: 15, score: 60 },
    { text: 'Closing', value: 50, score: 80 },
    { text: 'Communication', value: 20, score: 40 },
    { text: 'Product Experties', value: 10, score: 80 },
    { text: 'Leadership', value: 5, score: 90 },
    { text: 'Team Building', value: 8, score: 50 },
    { text: 'Listening Skills', value: 9, score: 100 },
    { text: 'Project Management', value: 18, score: 60 },
    { text: 'Teamwork', value: 50, score: 80 },
    { text: 'Delegation', value: 20, score: 40 },
    { text: 'Strategic thinking', value: 10, score: 100 },
    { text: 'Collaboration', value: 30, score: 70 },
    { text: 'Negotiating', value: 15, score: 60 },
    { text: 'Customer Service', value: 8, score: 50 },
    { text: 'Following Up', value: 9, score: 100 },
    { text: 'Intelligence', value: 18, score: 60 },
];
// render(<WordCloud data={data} />, document.getElementById('root'));

const ReactWordCloud = () => {
    const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
    //() => (~~(Math.random() * 6) - 3) * 30

    const getColor = (s) => {
        if (s < 70) {
            return '#ff002b'; //red
        } else if (s >= 70 && s <= 90) {
            return '#0000ff'; //blue
        } else if (s > 90) {
            return '#0c9615'; //green
        }
    }

    return (
        <div className='border p-0 w-50 h-50 mx-auto'>
            <WordCloud
                data={data}
                width={500}
                height={400}
                font="sans-serif"
                fontStyle="normal"
                fontWeight={600}
                fontSize={(word) =>
                    // console.log(`word:`, word)
                    Math.log2(word.value) * 7
                }
                spiral="archimedean"
                rotate={0}
                padding={3}
                random={Math.random}
                fill={(d, i) =>
                    // console.log(`color:`, d, i)
                    getColor(d.score)
                    // schemeCategory10ScaleOrdinal(i)
                }
                onWordClick={(event, d) => {
                    console.log(`onWordClick:`, d.text);
                }}
            // onWordMouseOver={(event, d) => {
            //     console.log(`onWordMouseOver: ${d.text}`);
            // }}
            // onWordMouseOut={(event, d) => {
            //     console.log(`onWordMouseOut: ${d.text}`);
            // }}
            />
        </div>
    );
};

export default ReactWordCloud;