'use client';
import { create } from 'zustand';

const initialResumeState = {
  personalDetails: {
    name: 'Harish Kumar',
    email: 'harish.kumar@example.com',
    phone: '+91 9876543210',
    website: 'linkedin.com/in/harishkumar',
    github: 'github.com/harish',
    behance: 'behance.net/harish'
  },
  sections: [
    {
      title: 'Education',
      items: [
        {
          headline: 'Master of Computer Application; GPA: 8.06',
          subhead: 'Vellore Institute of Technology',
          date: 'June 2022 - August 2024',
          location: 'Chennai, India',
          details: [],
        },
         {
          headline: 'Bachelor of Science (HONORS) - Mathematics; GPA: 8.70',
          subhead: 'Kolkata University',
          date: 'June 2018 - August 2021',
          location: 'Kolkata, India',
          details: [],
        },
      ],
    },
    {
        title: 'Skills Summary',
        items: [
            {
                headline: 'Languages',
                subhead: 'Python, SQL, JAVA',
                details: []
            },
            {
                headline: 'Frameworks',
                subhead: 'Pandas, NumPy, Scikit-Learn, Matplotlib',
                details: []
            }
        ]
    },
    {
      title: 'Work Experience',
      items: [
        {
            headline: 'Business Analyst Intern | WS | LINK',
            subhead: '',
            date: 'January 24 - March 24',
            details: [
                'Streamlined data collection and reporting procedures, reducing processing time by 20% enhancing efficiency.',
                'Collaborated with 3+ cross-functional teams to gather requirements, define project scopes, and ensure alignment with business objectives, fostering effective teamwork and project success.'
            ]
        }
      ],
    },
    {
      title: 'Projects',
      items: [
        {
          headline: 'Student Performance Prediction | LINK',
          subhead: 'Python, Machine Learning, Scikit-learn',
          date: 'November 23 - February 2024',
          details: [
            'Achieved a 96% accuracy in predicting student performance based on past academic data using a machine learning model.',
            'Managed data integrity by handling missing values and encoding categorical variables, enhancing quality by 33%.'
          ],
        },
      ],
    },
    {
        title: 'Certificates',
        items: [
            {
                headline: 'Programming in Python (Meta) | CERTIFICATE',
                date: 'March 2023',
                details: []
            }
        ]
    }
  ],
};

export const useResumeStore = create((set) => ({
  resume: initialResumeState,

  updateField: (section, field, value) => set((state) => ({
    resume: {
      ...state.resume,
      [section]: {
        ...state.resume[section],
        [field]: value,
      },
    },
  })),

  addSectionItem: (title) => set((state) => {
    const newSections = state.resume.sections.map(section => {
      if (section.title === title) {
        return {
          ...section,
          items: [...section.items, { headline: '', subhead: '', date: '', location: '', details: [''] }]
        };
      }
      return section;
    });
    return { resume: { ...state.resume, sections: newSections } };
  }),

  removeSectionItem: (title, itemIndex) => set((state) => {
     const newSections = state.resume.sections.map(section => {
      if (section.title === title) {
        const newItems = section.items.filter((_, index) => index !== itemIndex);
        return { ...section, items: newItems };
      }
      return section;
    });
    return { resume: { ...state.resume, sections: newSections } };
  }),

  updateSectionItem: (title, itemIndex, field, value) => set((state) => {
    const newSections = state.resume.sections.map(section => {
      if (section.title === title) {
        const newItems = section.items.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, [field]: value };
          }
          return item;
        });
        return { ...section, items: newItems };
      }
      return section;
    });
    return { resume: { ...state.resume, sections: newSections } };
  }),
  
  addItemDetail: (title, itemIndex) => set((state) => {
     const newSections = state.resume.sections.map(section => {
        if(section.title === title) {
            const newItems = section.items.map((item, index) => {
                if(index === itemIndex) {
                    return {...item, details: [...item.details, '']};
                }
                return item;
            });
            return {...section, items: newItems};
        }
        return section;
     });
     return { resume: { ...state.resume, sections: newSections } };
  }),

  removeItemDetail: (title, itemIndex, detailIndex) => set((state) => {
    const newSections = state.resume.sections.map(section => {
        if(section.title === title) {
            const newItems = section.items.map((item, index) => {
                if(index === itemIndex) {
                    const newDetails = item.details.filter((_, dIndex) => dIndex !== detailIndex);
                    return {...item, details: newDetails};
                }
                return item;
            });
            return {...section, items: newItems};
        }
        return section;
     });
     return { resume: { ...state.resume, sections: newSections } };
  }),
  
  updateItemDetail: (title, itemIndex, detailIndex, value) => set((state) => {
    const newSections = state.resume.sections.map(section => {
        if(section.title === title) {
            const newItems = section.items.map((item, index) => {
                if(index === itemIndex) {
                    const newDetails = item.details.map((detail, dIndex) => {
                        if(dIndex === detailIndex) {
                            return value;
                        }
                        return detail;
                    });
                    return {...item, details: newDetails};
                }
                return item;
            });
            return {...section, items: newItems};
        }
        return section;
     });
     return { resume: { ...state.resume, sections: newSections } };
  })
}));
