
import EditIcon from '@mui/icons-material/Edit';
import { Save } from '@mui/icons-material';
const PersonalInfo = () => {


    return (<div>
        <form action="">
            <div className="left flex flex-col">
                <div className="left flex flex-row">
                    <div class="mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" ml-20 mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                </div>
                <div className="left flex flex-row">
                    <div class="mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Mobile Number</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" ml-20 mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                </div>

                <div className="left flex flex-row">
                    <div class=" mb-6 w-1/2">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select Gender </label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Male</option>
                            <option>Female</option>
                            <option>TransGender</option>
                            <option>Awasthi Gender</option>
                        </select>
                    </div>
                    <div class=" ml-20 mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">D.O.B</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    </div>

                </div>
                <div className='flex flex-row-reverse ml-2'>

                    <button type="submit" class="text-black bg-[#2EB8CB] hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red dark:focus:ring-red ml-10">Save Change
                    <Save ml="3px" /></button>
                    <button type="submit" class="text-black bg-yellow hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red dark:focus:ring-red ">
                    Edit <EditIcon ml="3px" /></button>
                </div>
            </div>

        </form>

    </div>);
}

export default PersonalInfo;