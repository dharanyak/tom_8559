
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({

})

const ProjectModel = mongoose.model('Project', ProjectSchema, 'Project');
export default ProjectModel;
