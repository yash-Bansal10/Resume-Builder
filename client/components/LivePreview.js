'use client';
import { useResumeStore } from '@/store/resumeStore';

const SectionTitle = ({ title }) => (
    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-600 border-b-2 border-gray-300 pb-1 mb-3">{title}</h2>
);

export default function LivePreview() {
    const resume = useResumeStore((state) => state.resume);

    const ensureUrlProtocol = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg font-sans text-sm" id="resume-preview">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-800 break-words">{resume.personalDetails.name || 'Your Name'}</h1>
                    <div className="text-gray-600 space-x-4">
                        {resume.personalDetails.website && (
                            <a href={ensureUrlProtocol(resume.personalDetails.website)} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                LinkedIn
                            </a>
                        )}
                        {resume.personalDetails.github && (
                            <a href={ensureUrlProtocol(resume.personalDetails.github)} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                GitHub
                            </a>
                        )}
                        {resume.personalDetails.behance && (
                            <a href={ensureUrlProtocol(resume.personalDetails.behance)} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Behance
                            </a>
                        )}
                    </div>
                </div>
                <div className="text-right text-gray-600">
                    {resume.personalDetails.email && <div>{resume.personalDetails.email}</div>}
                    {resume.personalDetails.phone && <div>{resume.personalDetails.phone}</div>}
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-4">
                {resume.sections.map((section) => (
                    <div key={section.title}>
                        <SectionTitle title={section.title} />
                        <div className="space-y-3">
                            {section.items.map((item, index) => (
                                <div key={index}>
                                    {section.title === 'Skills Summary' ? (
                                        <div className="flex">
                                            <p className="font-bold w-1/4">{item.headline}</p>
                                            <p>{item.subhead}</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex justify-between">
                                                <h3 className="text-sm font-bold break-words">{item.headline || 'Your Headline'}</h3>
                                                <div className="text-right">
                                                    {item.location && <p className="font-bold">{item.location}</p>}
                                                    <p className="text-gray-500">{item.date || 'Date'}</p>
                                                </div>
                                            </div>
                                            {item.subhead && <p className="font-semibold text-gray-700 break-words">{item.subhead}</p>}
                                            <ul className="list-disc list-inside mt-1 text-gray-700 space-y-1 pl-4">
                                                {item.details.map((detail, i) => (
                                                  detail && <li key={i} className="break-words">{detail}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

