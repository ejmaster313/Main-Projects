import os
import shutil
import sched
import time
import datetime
import os.path

'''
This program is used to move one file in a location to another
'''

'''
These lines get the filename
'''
save_path = 'C:\\Users\\Elijah\\Documents\\Klei\\OxygenNotIncluded\\save_files\\';

filename = input('Exact name of file: ');

whole_name = (save_path + filename + '.sav')

'''
These lines select where and from the file is moving
'''

source = 'C:\\Users\\Elijah\\Documents\\Klei\\OxygenNotIncluded\\save_files\\' + filename + '.sav'


dest = 'C:\\Users\\Elijah\\OneDrive\\onitest\\'

destination = (dest + filename + '.sav')



if os.path.exists(source):
    shutil.copyfile(source, destination)
    print('File:', filename.join('""'), 'has been backed up on')
    print(datetime.datetime.now())
    time.sleep(3)
else:
    print("There is no file named " + filename)
    time.sleep(3)


