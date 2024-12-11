import { FC, useState } from "react";

interface FormData {
  name: string;
  email: string;
  id: string;
}
// Enroll Page Component
export const Adminenroll: FC = () => {
  const [userType, setUserType] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    id: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Enrollment Submitted:', { ...formData, userType });
    // Add actual submission logic here
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Enrollment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">User Type</label>
          <select 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter full name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">ID</label>
          <input 
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            placeholder="Enter ID number"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Enroll
        </button>
      </form>
    </div>
  );
};


