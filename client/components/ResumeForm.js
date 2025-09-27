'use client';
import { useResumeStore } from '@/store/resumeStore';

const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";
const buttonClasses = "mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
const removeButtonClasses = "ml-2 px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-md hover:bg-red-700";

export default function ResumeForm() {
    const { resume, updateField, updateSectionItem, addSectionItem, removeSectionItem, updateItemDetail, addItemDetail, removeItemDetail } = useResumeStore();

    const getFieldLabel = (sectionTitle, fieldName) => {
        const labels = {
            Education: { headline: 'Degree & Major', subhead: 'Institution', location: 'Location' },
            'Work Experience': { headline: 'Job Title & Company', subhead: 'Location (Optional)', date: 'Date Range'},
            Projects: { headline: 'Project Title', subhead: 'Technologies Used', date: 'Date Range' },
            'Skills Summary': { headline: 'Skill Category', subhead: 'Skills List' },
            Certificates: { headline: 'Certificate Name', date: 'Date'}
        };
        return labels[sectionTitle]?.[fieldName] || fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
            {/* Personal Details */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b pb-2">Personal Details</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" value={resume.personalDetails.name} onChange={(e) => updateField('personalDetails', 'name', e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value={resume.personalDetails.email} onChange={(e) => updateField('personalDetails', 'email', e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" value={resume.personalDetails.phone} onChange={(e) => updateField('personalDetails', 'phone', e.target.value)} className={inputClasses} />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <input type="text" value={resume.personalDetails.website} onChange={(e) => updateField('personalDetails', 'website',  e.target.value)} className={inputClasses} />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">GitHub</label>
                    <input type="text" value={resume.personalDetails.github} onChange={(e) => updateField('personalDetails', 'github', e.target.value)} className={inputClasses} />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Behance</label>
                    <input type="text" value={resume.personalDetails.behance} onChange={(e) => updateField('personalDetails', 'behance', e.target.value)} className={inputClasses} />
                </div>
            </div>

            {/* Dynamic Sections */}
            {resume.sections.map((section) => (
                <div key={section.title} className="space-y-4">
                    <h2 className="text-xl font-semibold border-b pb-2">{section.title}</h2>
                    {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="p-4 border rounded-md space-y-3 relative">
                             <button onClick={() => removeSectionItem(section.title, itemIndex)} className={`${removeButtonClasses} absolute top-2 right-2`}>Remove Entry</button>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">{getFieldLabel(section.title, 'headline')}</label>
                                <input type="text" value={item.headline} onChange={(e) => updateSectionItem(section.title, itemIndex, 'headline', e.target.value)} className={inputClasses} />
                            </div>
                            {section.title !== 'Certificates' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{getFieldLabel(section.title, 'subhead')}</label>
                                    <input type="text" value={item.subhead} onChange={(e) => updateSectionItem(section.title, itemIndex, 'subhead', e.target.value)} className={inputClasses} />
                                </div>
                            )}
                             {section.title !== 'Skills Summary' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{getFieldLabel(section.title, 'date')}</label>
                                    <input type="text" value={item.date} onChange={(e) => updateSectionItem(section.title, itemIndex, 'date', e.target.value)} className={inputClasses} placeholder="e.g., June 2022 - August 2024"/>
                                </div>
                             )}
                            {section.title === 'Education' && (
                                 <div>
                                    <label className="block text-sm font-medium text-gray-700">{getFieldLabel(section.title, 'location')}</label>
                                    <input type="text" value={item.location} onChange={(e) => updateSectionItem(section.title, itemIndex, 'location', e.target.value)} className={inputClasses} placeholder="e.g., Chennai, India"/>
                                </div>
                            )}
                            {item.details && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Details (Bullet Points)</label>
                                    {item.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex items-center mt-1">
                                            <input type="text" value={detail} onChange={(e) => updateItemDetail(section.title, itemIndex, detailIndex, e.target.value)} className={inputClasses}/>
                                            <button onClick={() => removeItemDetail(section.title, itemIndex, detailIndex)} className={removeButtonClasses}>X</button>
                                        </div>
                                    ))}
                                    <button onClick={() => addItemDetail(section.title, itemIndex)} className={`${buttonClasses} text-xs`}>Add Detail</button>
                                </div>
                            )}
                        </div>
                    ))}
                    <button onClick={() => addSectionItem(section.title)} className={buttonClasses}>Add {section.title}</button>
                </div>
            ))}
        </div>
    );
}
