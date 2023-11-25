import threading
import time

class TaskManager:
    def __init__(self, max_threads):
        self.authentication_bulkhead = threading.BoundedSemaphore(max_threads)
        self.data_processing_bulkhead = threading.BoundedSemaphore(max_threads)

    def authenticate_user(self, user):
        with self.authentication_bulkhead:
            print(f"Authenticating user: {user}")
            time.sleep(2)
            print(f"Authentication complete for user: {user}")

    def process_data(self, data):
        with self.data_processing_bulkhead:
            print(f"Processing data: {data}")
            time.sleep(3)
            print(f"Data processing complete for: {data}")

def simulate_requests(task_manager):
    for i in range(5):
        user = f"User_{i}"
        data = f"Data_{i}"

        threading.Thread(target=task_manager.authenticate_user, args=(user,)).start()
        threading.Thread(target=task_manager.process_data, args=(data,)).start()

if __name__ == "__main__":
    max_threads_per_bulkhead = 2
    task_manager = TaskManager(max_threads_per_bulkhead)

    simulate_requests(task_manager)
