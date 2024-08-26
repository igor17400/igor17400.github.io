import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  year,
  name,
  body,
  portfolioLink,
  certificateLink,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  portfolioLink?: string;
  certificateLink?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-2"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-base">
      <b className="font-bold text-xl">{name}</b> - {year}
    </div>
    <h3 className="italic text-lg">{body}</h3>
    <div className="font-medium space-x-4">
      {portfolioLink && (
        <>
          <a
            href={portfolioLink}
            target="_blank"
            rel="noreferrer"
            className="text-primary italic hover:underline"
          >
            Portfolio
          </a>
          <span className="text-gray-500">|</span>
        </>
      )}
      <a
        href={certificateLink}
        target="_blank"
        rel="noreferrer"
        className="text-primary italic hover:underline"
      >
        Certificate
      </a>
    </div>
  </li>
);

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Certifications
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {certifications.map((certification, index) => (
                  <ListItem
                    key={index}
                    year={certification.year}
                    name={certification.name}
                    body={certification.body}
                    portfolioLink={certification.portfolioLink}
                    certificateLink={certification.certificateLink}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
