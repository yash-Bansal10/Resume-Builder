import ResumeForm from '@/components/ResumeForm';
import LivePreview from '@/components/LivePreview';
import { useResumeStore } from '@/store/resumeStore';
import axios from 'axios';

export default function HomePage() {
  const resumeData = useResumeStore((state) => state.resume);

  const handleDownloadPdf = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/resumes/generate',
        resumeData,
        { responseType: 'blob' }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

    } catch (error) {
      console.error('Error downloading PDF', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 bg-gray-100">
      <div className="w-full max-w-7xl">
        <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Resume Builder</h1>
            <p className="text-gray-600">Create your professional resume in minutes.</p>
        </header>

        <div className="flex justify-end mb-4">
            <button
                onClick={handleDownloadPdf}
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Download PDF
            </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <ResumeForm />
          </div>
          <div className="w-full md:w-1/2">
            <LivePreview />
          </div>
        </div>
      </div>
    </main>
  );
}
