import CollectionDetails from '../components/CollectionDetails'
import Faqs from '../components/Faqs'
import PostDetailFeature from '../components/PostDetailFeature'
import RecentActivityTable from '../components/RecentActivityTable'

const PostDetailPage = () => {
    return (
        <div>
            <PostDetailFeature />
            <RecentActivityTable />
            <CollectionDetails />
            <Faqs />
            
        </div>
    )
}

export default PostDetailPage
